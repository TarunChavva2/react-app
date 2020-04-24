import styled from "@emotion/styled";
import tw from "tailwind.macro";

const SignInDiv = styled.div`${tw`flex flex-col m-auto mt-56 items-center justify-center bg-gray-400 shadow-md rounded px-8 pt-6 pb-8 w-1/5`}`;
const UserName = styled.input`${tw`flex shadow appearance-none border rounded py-2 px-3 m-2 text-gray-700 leading-tight focus:shadow-outline`}`;
const UserPassword = styled.input`${tw`flex shadow appearance-none border rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline`}`;
const SignInButton = styled.button`${tw`flex bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded`}`;
const Heading = styled.p`${tw`text-2xl font-bold`}`

export { SignInDiv, UserName, UserPassword, SignInButton, Heading };