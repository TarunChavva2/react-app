import styled from '@emotion/styled';
import tw from 'tailwind.macro';

let Headerdiv = styled.div`${tw`flex items-center justify-between h-24 font-mono bg-white shadow-lg`}`;
let Headdingtext = styled.div`${tw`pl-8 font-light text-lg`}`;
let Themebutton = styled.button`${tw`pr-10 h-12 text-lg`}`;
let Filterdiv = styled.div`${tw`flex justify-between items-center h-24 bg-gray-500 shadow-inner`}`;
let Searchboxdiv = styled.div`${tw`flex items-center justify-center rounded ml-8 bg-white w-1/5 shadow-md`}`
let Countriesdashboarddiv = styled.div`${tw`flex w-screen flex-wrap justify-around bg-gray-500`}`;
let Countrycards = styled.div`${tw`flex flex-col justify-between rounded w-56 m-4 bg-white shadow-lg`}`;

export { Headerdiv, Headdingtext, Themebutton, Countriesdashboarddiv, Countrycards, Filterdiv, Searchboxdiv };
