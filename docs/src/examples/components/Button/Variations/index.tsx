import * as React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const Variations = () => (
  <ExampleSection title="Variations">
    <ComponentExample
      title="Fluid"
      description="A button can take the width of its container."
      examplePath="components/Button/Variations/ButtonExampleFluid"
    />
    <ComponentExample
      title="Circular"
      description="A button can be circular."
      examplePath="components/Button/Variations/ButtonExampleCircular"
    />
    <ComponentExample
      title="Size"
      description="A button can have assorted sizes."
      examplePath="components/Button/Variations/ButtonExampleSize"
    />
  </ExampleSection>
)

export default Variations
