import styled from "@emotion/styled";
import tw from "tailwind.macro";

const HeaderDiv = styled.div`${tw`flex w-9/12 justify-between border border-red-600`}`;
const ItemsSortDropDown = styled.select`${tw`block bg-gray-200 text-pink-300 text-gray-700 py-2 px-2 pr-8 rounded hover:bg-gray-400`}`;

export { HeaderDiv, ItemsSortDropDown };