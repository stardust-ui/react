import React from 'react'
import * as _ from 'lodash'
import { Provider, Text } from '@stardust-ui/react'

const TextSizesExample = () => (
  <Provider.Consumer
    render={({ siteVariables }) => {
      return _.map(siteVariables.fontSizes, (value, key) => (
        <div key={key}>
          <Text size={key}>Dicta voluptatum dolorem.</Text>
        </div>
      ))
    }}
  />
)
export default TextSizesExample
