import { useDrop, DropTargetMonitor } from 'react-dnd'
import useDispatch from './useDispatch'
import builder from '~design-systems/chakra/composer/builder'
import { getRootComponents } from '~design-systems/factory'
import { ComponentType, MetaComponentType } from '~design-systems/types'
import { ComponentItemProps } from '~react-app-env'

export const useDropComponent = (
  componentId: string,
  accept: (ComponentType | MetaComponentType)[] = getRootComponents(),
  canDrop: boolean = true,
) => {
  const dispatch = useDispatch()

  const [{ isOver }, drop] = useDrop({
    accept,
    collect: monitor => ({
      isOver: monitor.isOver({ shallow: true }) && monitor.canDrop(),
    }),
    drop: (item: ComponentItemProps, monitor: DropTargetMonitor) => {
      if (!monitor.isOver()) {
        return
      }

      if (item.isMoved) {
        dispatch.components.moveComponent({
          parentId: componentId,
          componentId: item.id,
        })
      } else if (item.isMeta) {
        dispatch.components.addMetaComponent(builder[item.type](componentId))
      } else {
        dispatch.components.addComponent({
          parentName: componentId,
          type: item.type,
          rootParentType: item.rootParentType,
        })
      }
    },
    canDrop: () => canDrop,
  })

  return { drop, isOver }
}
