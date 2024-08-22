let arr = [
    {
        dp: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
        story: 'https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80'
    },
    {
        dp: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
        story: 'https://images.unsplash.com/photo-1516446636564-c48e723868fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80'
    },
    {
        dp: 'https://images.unsplash.com/photo-1465984111739-03a1ee4647a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        story: 'https://images.unsplash.com/photo-1567898948654-3293572fe641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1306&q=80'
    },
    {
        dp: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
        story: 'https://images.unsplash.com/photo-1520013225692-fff4010c0ae6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80'
    },


]
let storiyan = document.getElementById('storiyan')

let clutter = ''
arr.forEach(function(value,index){
    clutter = clutter +  `<div class="story">
    <img id='${index}' src="${value.dp}" alt="">
  </div>
`
})
storiyan.innerHTML = clutter;

let fullscreen = document.getElementById('full-screen')

storiyan.addEventListener('click',function(dets){
    let main = dets.target.id;
    if(dets.target.tagName === 'IMG'){
        fullscreen.style.display = 'block';
        fullscreen.style.backgroundImage = `url(${arr[main].story})`
    
    
    setTimeout(function(){
fullscreen.style.display = 'none'
    },3000)

    }
    else{
        alert('fuck you')
    }

    
})