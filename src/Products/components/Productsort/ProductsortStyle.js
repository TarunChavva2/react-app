import tw from "tailwind.macro";
import styled from "@emotion/styled";

const ItemsSortDropDown = styled.select`${tw`block bg-gray-200 border border-color-black m-1 text-pink-300 text-gray-700 py-1 px-1 pr-6 rounded hover:bg-gray-400`}`;
const SortingDiv = styled.div`${tw`flex items-center`}`;

export { ItemsSortDropDown, SortingDiv };