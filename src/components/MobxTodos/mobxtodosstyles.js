import styled from '@emotion/styled';
import tw from 'tailwind.macro';

let Headding = styled.div`${tw`flex items-center text-6xl`}`;
let Tododiv = styled.div`${tw`flex-col items-center h-12 w-9/12 m-auto`}`;
let Userinputtag = styled.input`${tw`shadow appearance-none border font-mono rounded text-2xl w-3/6 py-2 px-3 text-gray-700 focus:outline-none`}`;
export { Headding, Tododiv, Userinputtag };