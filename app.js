var searchbooks=document.getElementById('search-books')
console.log(searchbooks);
console.log('hell')

var listbook=document.getElementById('book-list');
console.log(listbook)

const titles=document.getElementsByClassName('title');
//return html collection so convert into array
//Array.from(collectionname)

console.log(titles);
console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));


Array.from(titles).forEach(function(title){console.log(title);})


const wmf=document.querySelector('#book-list li:nth-child(2) .name');

console.log(wmf);

const books=document.querySelector('#book-list li .name')

console.log(books);



const allbooks=document.querySelectorAll('#book-list li .name');

console.log(allbooks);

// 
allbooks.forEach(function(books){
    

    console.log(books);
console.log(books.textContent)
books.textContent+="(addedtext from backend)"


}
);


// here goes book listing
// const booklist=document.querySelector('#book-list');

// console.log(booklist);
// booklist.innerHTML='<h2>Books and more books...</h2>';

// booklist.innerHTML+='<p>This is how you add Html content</p>'



// const banner=document.querySelector('#page-banner');

// console.log("#page-banner node type is",banner.nodeType);
// console.log("#page-banner node name is",banner.nodeName);
// console.log("#page-banner has child ",banner.hasChildNodes());

// const clonedBanner=banner.cloneNode(true)
// console.log(clonedBanner);


const booklist1=document.querySelector('#book-list');

console.log('booklist parent element',booklist1.parentElement);

console.log('booklist parent node',booklist1.parentNode);



// console.log('all node children');
// booklist1.children.forEach(function(node){
    
//     console.log(node);
// });

// console.log('all element children');
// booklist1.childNodes.forEach(function(node){console.log(node)});



// const titles1=booklist1.querySelectorAll('.name');


// console.log(titles1);
// titles1.forEach(function(title){console.log(title.textContent)})



// console.log("<<<<<<<<<<<<<<<");

// const booklist3=document.querySelector('#book-list');

// console.log(booklist3.nextSibling);


// console.log(booklist3.nextElementSibling);


// console.log(booklist3.previousSibling);

// console.log(booklist3.previousElementSibling);


// booklist3.previousElementSibling.querySelector('p').innerHTML+='<br><p>Hello coll stuff</p>'


// const p=document.querySelector('#page-banner p ')


// p.addEventListener('click',function(e){console.log(e.target) });




// const btns=document.querySelectorAll('#book-list .delete ');



// btns.forEach(function(btn){
    

//     btn.addEventListener('click',function(e)
//     {
//         const li=e.target.parentElement;
//         li.parentElement.removeChild(li);

//     })
    
 
// });

// const a=document.querySelector('#page-banner a');

// a.addEventListener('click',function(e)
// {

//     e.preventDefault();

//     console.log('navigate to ',e.target.textContent,'was prevented')


// })




const list=document.querySelector('#book-list ul');
list.addEventListener('click',function(e)
{

    if(e.target.className=='delete')
    {

        const li=e.target.parentElement
        list.removeChild(li);
    }
})

// console.log(listitems);

const addform=document.forms['add-book'];
console.log(addform);

addform.addEventListener('submit',function(e)
{


    e.preventDefault();

    const value=addform.querySelector('input[type="text"]').value;
    console.log(value);

    const li=document.createElement('li');

    const bookName=document.createElement('span');
    const deleteBtn=document.createElement('span');

    //add content

    deleteBtn.textContent='delete'

    bookName.textContent=value;
    //append to the document

    li.appendChild(bookName);

    li.appendChild(deleteBtn)
    list.append(li);

})
//hidebook

const hideBox=document.querySelector('#hide');

hideBox.addEventListener('change',function(e)
{
if(hideBox.checked)
{

list.style.display="none";

}
else{

    list.style.display='initial';
}
});



//filter books

const serachbox=document.forms['search-books'].querySelector('input');

serachbox.addEventListener('keyup',function(e)
{
    const term=e.target.value.toLowerCase();
    const books=list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
       const title= book.firstElementChild.textContent;
       if(title.toLowerCase().indexOf(term)!=-1)
       {

        book.style.display='block';
       }
       else{

        book.style.display='none';
       }
    })


})