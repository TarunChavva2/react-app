import React from "react";

import { SizeButton, FilterDiv, Heading } from "./Sizefilterstyles";

class SizeFilter extends React.Component {
    render() {
        const Sizes = ["XS", "S", "M", "L", "XL", "XXL"];
        return (
            <FilterDiv>
                <Heading>Sizes:</Heading>
                <div>
                    {
                        Sizes.map((eachSize) => <SizeButton key={eachSize}> {eachSize}</SizeButton>)
                    }
                </div>
            </FilterDiv >
        )
    }
}

export default SizeFilter;