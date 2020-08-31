var axios=window.axios

$(document).ready(()=>{
    if(document.cookie){
        axios.get('http://localhost:3000/unlock')
        .then((res)=>{
            $('.signinicon .index-icon').text(res.data.user)
        })
    }
})

$(document).ready(()=>{
    $('.loadsignin').click(()=>{
            if($('.loginPart').children().length>0){
                $('.loginPart').children().remove()
            } else {
                if(document.cookie){
                    window.location.replace('http://localhost:3000/user/'+$('.signinicon .index-icon').text())
                } else {
                    axios.post('http://localhost:3000/data',{rb:'login'})
                    .then(res=>{
                        $('.loginPart').children().remove()
                        $('.loginPart').append(res.data).removeClass('hidden')
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                }
            }
    })  
})
