import{b as i,j as t,L as n,E as e,k as x}from"./index-C0nPw64T.js";import{a as m,C as c}from"./CardList-CZezegjE.js";import"./LikeBtn-CI6b8eQw.js";const d=({bookId:r})=>{const{data:s,isLoading:a,isError:o}=i.useGetBookDetailsQuery(r);return t.jsxs(t.Fragment,{children:[s&&t.jsx(m,{id:s.id,authors:s.authors,title:s.title,image:s.image},s.id),a&&t.jsx(n,{}),o&&t.jsx(e,{text:"Ошибка при загрузке данных о книге"})]})},g=()=>{const r=x();return t.jsxs("main",{className:"content container",children:[t.jsx(c,{children:r.map(s=>t.jsx(d,{bookId:s},s))}),r.length===0&&t.jsx(e,{text:"Здесь пока ничего нет"})]})};export{g as FavoritesPage};
