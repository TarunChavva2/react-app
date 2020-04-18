import styled from '@emotion/styled';
import tw from 'tailwind.macro';

let Headerdiv = styled.div`${tw`flex flex-col items-center w-3/12`}`;
let SubHeader = styled.div`${tw`flex items-center justify-between mb-4 px-1 w-full`}`;
let TopLevel = styled.div`${tw`text-xl mb-12 text-white`}`;
let Level = styled.div`${tw`text-xl text-white`}`;
let Theme = styled.div`${tw`text-xl border px-2 py-1 text-white border-white`}`

export { Headerdiv, SubHeader, TopLevel, Level, Theme };