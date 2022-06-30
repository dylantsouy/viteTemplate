# Tools


# Code Conventions
## Components

Every components should have one unit test, and use index to export the component.
    
    - componentsname
        |_ ComponentsName.tsx
        |_ ComponentsName.test
        |_ index.ts

Which index.ts may look like this:

    export { default } from './SomeComponent'


Using namespace component to related children.
> * If there are strong relationshop between them.
> * Don't nested more than 1 level.
 

    <Select>
	    <Select.Item />
    </Select>
    
    const Select = (props: SelectProps) => {/* ... */}
    Select.Item = (props: ItemProps) => { /*...*/ }

Put children component's directory in the parent directory:

    - select
        |_Select.tsx
        |_index.ts
        |_item
            |_Item.tsx
            |_index.ts

And in Select.tsx:

    import React from 'react'
    import Item from './item'

    {
     ...define Select
    }
    Select.Item = Item;

## Import Convention
Example:

    - src
        - component
            |_ Sidebar.tsx
        - services
            |_someServices.ts

Then in the Sidebar.tsx:

    import { something } from "@/services/someServices.ts"

> Don't need to write "../../../" thing 👍

# Branch Naming Rules
# Commit Message Rules
