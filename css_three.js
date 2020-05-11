const addBtn = document.querySelector('#add button');
const addForm=document.forms['add'];
const searchForm = document.forms['searchForm'];
const list = document.querySelector('#book-list ul');
const searchValue = document.querySelector('#title ul li input[type="text"]').value;
//add
var delList = document.querySelectorAll('#book-list #delete');
addForm.addEventListener('submit',function(e){
    e.preventDefault();
    console.log('Clicked!');
    const value = addForm.querySelector('input[type="text"]').value;
    addForm.querySelector('input[type="text"]').value = '';
    if(value==''){
        alert('You did not enter anything!');
    }
    else{
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    li.animate([
        {transform: 'translateY(20px)'},
        {transform: 'translateY(0px)'}
    ],
    {
        duration: 300,
        easing: 'ease',
    }
    )
    bookName.style.fontSize = '1.5rem';
    const del = document.createElement('span');
    del.innerHTML = 'Delete';
    del.classList.add('del');
    bookName.innerHTML = value;
    li.appendChild(bookName);
    li.appendChild(del);
    list.appendChild(li);

    li.addEventListener('click',function(e){
        var ll=e.target.parentElement;
        ll.animate([
            {transform: 'translateY(-20px)'},
            {transform: 'translateY(0px)'}
        ],
        {
            duration: 400,
            easing: 'ease',
        }
        )
        
        console.log('LL is ',ll);
        var l = e.target.parentElement;
        setTimeout(1000);
        console.log('target parentelement is ',l);
        li.removeChild(bookName);
        li.removeChild(del);
        li.remove();
    });
}
});



//search
const searchBar = document.forms['searchForm'].querySelector('input');
searchBar.addEventListener('keyup',function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    
    console.log(Array.isArray(books));
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        console.log(book.firstElementChild.textContent);
        console.log(term);

        if(title.toLowerCase().indexOf(term)!=-1){
            //book.style.display ='none';
            book.animate([
                {transform: 'translateY(-20px)'},
                {transform: 'translateY(0px)'}
            ],
            {
                duration: 400,
                easing: 'ease',
            }
            )
            
        }
        else{
            book.style.display = 'none';
        }
        if(term==''){
            book.style.display='block';
        }
        
    })
});

searchForm.addEventListener('submit',function(e){
    e.preventDefault(); 
})




