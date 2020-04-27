import styled from "@emotion/styled";
import tw from "tailwind.macro";

const ProductsPageScreen = styled.div`${tw`flex w-11/12 m-auto m-6 relative`}`;
const SideBar = styled.div`${tw`flex items-start`}`
const ProductsDisplayContainer = styled.div`${tw`flex-col w-full`}`;
const MainHeader = styled.div`${tw`flex justify-between`}`;
const SignOutButton = styled.button`${tw`flex p-1 m-5 text-base border border-gray-800 rounded hover:bg-gray-800 hover:text-white`}`

export { ProductsPageScreen, ProductsDisplayContainer, SideBar, MainHeader, SignOutButton };