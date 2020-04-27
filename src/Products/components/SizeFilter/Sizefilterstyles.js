import styled from "@emotion/styled";
import tw from "tailwind.macro";

const FilterDiv = styled.div`${tw`flex flex-wrap w-full`}`
const SizeButton = styled.button`${tw`rounded-full m-1 px-2 py-2 text-base border bg-gray-300 hover:border-gray-800`}`;
const Heading = styled.div`${tw`block font-medium text-md m-2`}`;

export { SizeButton, FilterDiv, Heading };