import styled from "@emotion/styled";
import tw from "tailwind.macro";

const ProductsPageScreen = styled.div`${tw`flex w-11/12 m-auto m-6 relative`}`;
const SideBar = styled.div`${tw`flex items-start`}`
const ProductsDisplayContainer = styled.div`${tw`flex-col w-full`}`;

export { ProductsPageScreen, ProductsDisplayContainer, SideBar };