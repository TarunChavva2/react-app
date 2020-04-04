import styled from '@emotion/styled';
import tw from 'tailwind.macro';

let Headerdiv = styled.div `${tw`flex items-center justify-between h-24 font-mono bg-white`}`;
let Headdingtext = styled.div `${tw`pl-8 font-light text-lg`}`;
let Themebutton = styled.button `${tw`pr-10 h-12 text-lg`}`;
let Countriesdashboarddiv = styled.div `${tw`flex w-screen flex-wrap justify-around bg-grey-500`}`;
let Countrycards = styled.div `${tw`flex flex-col justify-between rounded w-56 mt-8 bg-white shadow`}`;

export { Headerdiv, Headdingtext, Themebutton, Countriesdashboarddiv, Countrycards };
