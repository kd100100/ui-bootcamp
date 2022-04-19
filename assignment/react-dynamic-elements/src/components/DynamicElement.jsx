import React from "react";

function DynamicElement({ element }) {
    return (
        <element.htmlElementName style={element.style}>
            {element.innerHTML}
        </element.htmlElementName>
    );
}

export default DynamicElement;
