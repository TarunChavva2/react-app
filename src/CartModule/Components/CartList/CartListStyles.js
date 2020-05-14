import tw from "tailwind.macro";
import styled from "@emotion/styled";

const CartListDisplayContainer = styled.div`${tw`flex bg-gray-800 flex-col right-0 z-50 absolute w-2/6 h-screen`}`
const CartlistDisplay = styled.div`${tw`flex justify-start`}`;
const Icon = styled.button`${tw`flex text-5xl m-4 text-white mx-auto items-center`}`;
const CloseButton = styled.button`${tw`text-md m-3 text-gray-400 hover:text-white`}`

export { CartlistDisplay, Icon, CartListDisplayContainer, CloseButton };

