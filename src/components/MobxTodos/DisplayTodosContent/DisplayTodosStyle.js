import styled from '@emotion/styled';
import tw from 'tailwind.macro';

let TodosContentDiv = styled.div`${tw`flex-col`}`;
let Checkbox = styled.input`${tw`h-8 w-8 rounded-full border-dotted`}`
let Input = styled.input`${tw`shadow border font-mono rounded text-2xl w-10/12 py-2 px-3 text-gray-700 focus:outline-none`}
text-decoration:${props => props.status ? "line-through" : "none"};
color:${props => props.status ? "grey" : ""}`;
let Button = styled.button`${tw`bg-transparent text-2xl hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded`}`;

export { TodosContentDiv, Button, Input, Checkbox };