import tw from "tailwind.macro";
import styled from "@emotion/styled";

const EachProductDiv = styled.div`${tw`flex flex-col md:w-46 lg:w-1/5 xl:w-23 m-2 border border-gray-200 hover:border-gray-700`}`;
const FreeShippingDiv = styled.div`${tw`inline p-1 text-xs ml-32 absolute my-2 items-end bg-black text-white`}`
const Image = styled.img`${tw`h-48 w-9/12`}`;
const ProductContent = styled.div`${tw`flex flex-col items-center`}`;
const ProductName = styled.div`${tw`flex h-20 text-center`}`;
const Installments = styled.p`${tw`text-gray-600 text-sm`}`;
const AddToCartButton = styled.button`${tw`text-white rounded bg-gray-900 p-1 w-11/12 m-2`}`

export {
    EachProductDiv,
    FreeShippingDiv,
    Image,
    ProductContent,
    ProductName,
    Installments,
    AddToCartButton
};