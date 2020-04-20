import tw from "tailwind.macro";
import styled from "@emotion/styled";

let CellDiv = styled.button`${tw`bg-gray-500 py-2 px-4 rounded h-20 w-24 m-1`}
background-color:${ props => props.color};`

export { CellDiv };