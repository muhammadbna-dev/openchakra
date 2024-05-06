import React, { memo } from 'react'

import ButtonPanel from '~design-systems/chakra/inspector/panels/components/ButtonPanel'
import BadgePanel from '~design-systems/chakra/inspector/panels/components/BadgePanel'
import IconPanel from '~design-systems/chakra/inspector/panels/components/IconPanel'
import ImagePanel from '~design-systems/chakra/inspector/panels/components/ImagePanel'
import BoxPanel from '~design-systems/chakra/inspector/panels/components/BoxPanel'
import ChildrenControl from '~components/inspector/controls/ChildrenControl'
import AvatarPanel from '~design-systems/chakra/inspector/panels/components/AvatarPanel'
import AvatarGroupPanel from '~design-systems/chakra/inspector/panels/components/AvatarGroupPanel'
import AvatarBadgePanel from '~design-systems/chakra/inspector/panels/components/AvatarBadgePanel'
import CheckboxPanel from '~design-systems/chakra/inspector/panels/components/CheckboxPanel'
import IconButtonPanel from '~design-systems/chakra/inspector/panels/components/IconButtonPanel'
import ProgressPanel from '~design-systems/chakra/inspector/panels/components/ProgressPanel'
import LinkPanel from '~design-systems/chakra/inspector/panels/components/LinkPanel'
import SpinnerPanel from '~design-systems/chakra/inspector/panels/components/SpinnerPanel'
import CloseButtonPanel from '~design-systems/chakra/inspector/panels/components/CloseButtonPanel'
import DividerPanel from '~design-systems/chakra/inspector/panels/components/DividerPanel'
import CodePanel from '~design-systems/chakra/inspector/panels/components/CodePanel'
import TextareaPanel from '~design-systems/chakra/inspector/panels/components/TextareaPanel'
import CircularProgressPanel from '~design-systems/chakra/inspector/panels/components/CircularProgressPanel'
import HeadingPanel from '~design-systems/chakra/inspector/panels/components/HeadingPanel'
import TagPanel from '~design-systems/chakra/inspector/panels/components/TagPanel'
import SimpleGridPanel from '~design-systems/chakra/inspector/panels/components/SimpleGridPanel'
import SwitchPanel from '~design-systems/chakra/inspector/panels/components/SwitchPanel'
import AlertPanel from '~design-systems/chakra/inspector/panels/components/AlertPanel'
import AlertIconPanel from '~design-systems/chakra/inspector/panels/components/AlertIconPanel'
import AlertTitlePanel from '~design-systems/chakra/inspector/panels/components/AlertTitlePanel'
import AlertDescriptionPanel from '~design-systems/chakra/inspector/panels/components/AlertDescriptionPanel'
import FlexPanel from '~components/inspector/panels/styles/FlexPanel'
import StackPanel from '~design-systems/chakra/inspector/panels/components/StackPanel'
import FormControlPanel from '~design-systems/chakra/inspector/panels/components/FormControlPanel'
import TabsPanel from '~design-systems/chakra/inspector/panels/components/TabsPanel'
import InputPanel from '~design-systems/chakra/inspector/panels/components/InputPanel'
import RadioPanel from '~design-systems/chakra/inspector/panels/components/RadioPanel'
import RadioGroupPanel from '~design-systems/chakra/inspector/panels/components/RadioGroupPanel'
import SelectPanel from '~design-systems/chakra/inspector/panels/components/SelectPanel'
import ListPanel from '~design-systems/chakra/inspector/panels/components/ListPanel'
import ListItemPanel from '~design-systems/chakra/inspector/panels/components/ListItemPanel'
import ListIconPanel from '~design-systems/chakra/inspector/panels/components/ListIconPanel'
import AccordionItemPanel from '~design-systems/chakra/inspector/panels/components/AccordionItemPanel'
import AccordionPanel from '~design-systems/chakra/inspector/panels/components/AccordionPanel'
import FormLabelPanel from '~design-systems/chakra/inspector/panels/components/FormLabelPanel'
import FormHelperTextPanel from '~design-systems/chakra/inspector/panels/components/FormHelperTextPanel'
import FormErrorMessagePanel from '~design-systems/chakra/inspector/panels/components/FormErrorMessagePanel'
import GridPanel from '~design-systems/chakra/inspector/panels/components/GridPanel'
import NumberInputPanel from '~design-systems/chakra/inspector/panels/components/NumberInputPanel'
import AspectRatioPanel from '~design-systems/chakra/inspector/panels/components/AspectRatioPanel'
import BreadcrumbPanel from '~design-systems/chakra/inspector/panels/components/BreadcrumbPanel'
import BreadcrumbItemPanel from '~design-systems/chakra/inspector/panels/components/BreadcrumbItemPanel'
import HighlightPanel from '~design-systems/chakra/inspector/panels/components/HighlightPanel'
import KbdPanel from './components/KbdPanel'
import TabPanel from './components/TabPanel'
import StatArrowPanel from './components/StatArrowPanel'
import StatLabelPanel from './components/StatLabelPanel'
import SkeletonPanel from './components/SkeletonPanel'
import { IComponent } from '~react-app-env'

const ChakraPanels = ({ type }) => {
  console.log(type)
  return (
    <>
      {type === 'Button' && <ButtonPanel />}
      {type === 'Checkbox' && <CheckboxPanel />}
      {type === 'Box' && <BoxPanel />}
      {type === 'Badge' && <BadgePanel />}
      {type === 'Image' && <ImagePanel />}
      {type === 'Icon' && <IconPanel />}
      {type === 'IconButton' && <IconButtonPanel />}
      {type === 'Progress' && <ProgressPanel />}
      {type === 'Text' && <ChildrenControl />}
      {type === 'Link' && <LinkPanel />}
      {type === 'Avatar' && <AvatarPanel />}
      {type === 'AvatarGroup' && <AvatarGroupPanel />}
      {type === 'AvatarBadge' && <AvatarBadgePanel />}
      {type === 'Spinner' && <SpinnerPanel />}
      {type === 'Code' && <CodePanel />}
      {type === 'CloseButton' && <CloseButtonPanel />}
      {type === 'Divider' && <DividerPanel />}
      {type === 'Textarea' && <TextareaPanel />}
      {type === 'CircularProgress' && <CircularProgressPanel />}
      {type === 'Heading' && <HeadingPanel />}
      {type === 'Highlight' && <HighlightPanel />}
      {type === 'SimpleGrid' && <SimpleGridPanel />}
      {type === 'Switch' && <SwitchPanel />}
      {type === 'Alert' && <AlertPanel />}
      {type === 'AlertIcon' && <AlertIconPanel />}
      {type === 'AlertTitle' && <AlertTitlePanel />}
      {type === 'AlertDescription' && <AlertDescriptionPanel />}
      {type === 'Tag' && <TagPanel />}
      {type === 'Flex' && <FlexPanel />}
      {type === 'Stack' && <StackPanel />}
      {type === 'FormControl' && <FormControlPanel />}
      {type === 'Tabs' && <TabsPanel />}
      {type === 'Tab' && <TabPanel />}
      {type === 'Input' && <InputPanel />}
      {type === 'Radio' && <RadioPanel />}
      {type === 'RadioGroup' && <RadioGroupPanel />}
      {type === 'Select' && <SelectPanel />}
      {type === 'Skeleton' && <SkeletonPanel />}
      {type === 'SkeletonCircle' && <SkeletonPanel isSkeletonCircle />}
      {type === 'SkeletonText' && <SkeletonPanel isSkeletonText />}
      {type === 'List' && <ListPanel />}
      {type === 'ListItem' && <ListItemPanel />}
      {type === 'ListIcon' && <ListIconPanel />}
      {type === 'Accordion' && <AccordionPanel />}
      {type === 'AccordionItem' && <AccordionItemPanel />}
      {type === 'FormLabel' && <FormLabelPanel />}
      {type === 'FormHelperText' && <FormHelperTextPanel />}
      {type === 'FormErrorMessage' && <FormErrorMessagePanel />}
      {type === 'InputRightAddon' && <ChildrenControl />}
      {type === 'InputLeftAddon' && <ChildrenControl />}
      {type === 'Grid' && <GridPanel />}
      {type === 'NumberInput' && <NumberInputPanel />}
      {type === 'AspectRatio' && <AspectRatioPanel />}
      {type === 'Breadcrumb' && <BreadcrumbPanel />}
      {type === 'BreadcrumbItem' && <BreadcrumbItemPanel />}
      {type === 'BreadcrumbLink' && <LinkPanel />}
      {type === 'Kbd' && <KbdPanel />}
      {type === 'StatArrow' && <StatArrowPanel />}
      {type === 'StatLabel' && <StatLabelPanel />}
      {type === 'StatNumber' && <StatLabelPanel />}
    </>
  )
}

export default memo(ChakraPanels)
