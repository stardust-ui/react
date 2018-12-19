// Behavior-test use 'docs\src\behaviorMenu.json' file as source of strings to parse.
// The json file is generated by task 'build:docs:component-menu-behaviors'. The task will generate json file from the behaviors description.
// If you change behavior description, then you need to run:
//  - 'gulp build:docs:component-menu-behaviors' in order to get json file generated
//  OR
//  - 'yarn test' which has creating json file predefined in "pretest" step
import {
  basicListBehavior,
  basicListItemBehavior,
  buttonBehavior,
  iconBehavior,
  imageBehavior,
  inputBehavior,
  menuBehavior,
  menuItemBehavior,
  popupBehavior,
  popupFocusTrapBehavior,
  dialogBehavior,
  radioGroupBehavior,
  radioGroupItemBehavior,
  selectableListBehavior,
  selectableListItemBehavior,
  tabBehavior,
  tabListBehavior,
  toggleButtonBehavior,
  toolbarBehavior,
  toolbarButtonBehavior,
  treeTitleBehavior,
  gridBehavior,
} from 'src/lib/accessibility'
import { TestHelper } from './testHelper'
import definitions from './testDefinitions'

const behaviorMenuItems = require('docs/src/behaviorMenu')

const testHelper = new TestHelper()
testHelper.addTests(definitions)

testHelper.addBehavior('basicListBehavior', basicListBehavior)
testHelper.addBehavior('basicListItemBehavior', basicListItemBehavior)
testHelper.addBehavior('buttonBehavior', buttonBehavior)
testHelper.addBehavior('iconBehavior', iconBehavior)
testHelper.addBehavior('inputBehavior', inputBehavior)
testHelper.addBehavior('imageBehavior', imageBehavior)
testHelper.addBehavior('menuBehavior', menuBehavior)
testHelper.addBehavior('menuItemBehavior', menuItemBehavior)
testHelper.addBehavior('popupBehavior', popupBehavior)
testHelper.addBehavior('popupFocusTrapBehavior', popupFocusTrapBehavior)
testHelper.addBehavior('radioGroupBehavior', radioGroupBehavior)
testHelper.addBehavior('radioGroupItemBehavior', radioGroupItemBehavior)
testHelper.addBehavior('selectableListBehavior', selectableListBehavior)
testHelper.addBehavior('selectableListItemBehavior', selectableListItemBehavior)
testHelper.addBehavior('tabBehavior', tabBehavior)
testHelper.addBehavior('tabListBehavior', tabListBehavior)
testHelper.addBehavior('toolbarBehavior', toolbarBehavior)
testHelper.addBehavior('toggleButtonBehavior', toggleButtonBehavior)
testHelper.addBehavior('toolbarButtonBehavior', toolbarButtonBehavior)
testHelper.addBehavior('treeTitleBehavior', treeTitleBehavior)
testHelper.addBehavior('gridBehavior', gridBehavior)
testHelper.addBehavior('dialogBehavior', dialogBehavior)

testHelper.run(behaviorMenuItems)
