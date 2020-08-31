var axios = window.axios

$(document).ready(()=>{
    let user=window.location.pathname.split('/')[2]
    $('.userName').html(user)
})

$(document).click((event)=>{
    try {
        Array.from(event.target.classList).map(clas=>{
            if(clas!='loginsurface'){
                $('.loginPart').children().remove()
            }
        })
    } catch (error) {
        console.log(error)
    }
})

$(document).ready(()=>{
    $('.content').append('<p>My Events</p>')
    $('.loadsignin').click(()=>{
        if($('.loginPart').children().length>0){
            $('.loginPart').children().remove()
        } else {
            $('.loading').removeClass('hidden')
            axios.post('http://localhost:3000/data',{rb:'account'})
            .then(res=>{
                $('.loginPart').children().remove()
                $('.loginPart').append(res.data)
                axios.get('http://localhost:3000/data/'+$('.userName').text())
                .then(res=>{
                    $('#accountmail').text(`Email: ${res.data.email}`)
                    $('#fullname').text(`Name: ${res.data.firstName} ${res.data.lastName}`)
                    $('.loginPart').removeClass('hidden')
                    $('.loading').addClass('hidden')
                })
            })
            .catch(err=>{
                console.log(err)
            })
        }
    })
})

$(document).ready(()=>{
    $('.myEvents').click(()=>{
        $('.manageEvents').removeClass('selected')
        $('.account').removeClass('selected')
        $('.myEvents').removeClass('selected').addClass('selected')
        $('.content').children().remove()
        $('.content').append('<p>My Events</p>')
    })
    $('.manageEvents').click(()=>{
        $('.myEvents').removeClass('selected')
        $('.account').removeClass('selected')
        $('.manageEvents').removeClass('selected').addClass('selected')
        $('.content').children().remove()
        axios.post('http://localhost:3000/data',{rb:'newschedule'})
        .then(res=>{
            $('.content').append(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    })
    $('.account').click(()=>{
        $('.loading').removeClass('hidden')
        $('.myEvents').removeClass('selected')
        $('.manageEvents').removeClass('selected')
        $('.account').removeClass('selected').addClass('selected')
        $('.content').children().remove()
        axios.post('http://localhost:3000/data',{rb:'account-client'})
        .then(res=>{
            $('.content').append(res.data)
            $('.loading').addClass('hidden')
        })
        .catch(err=>{
            console.log(err)
        })
    })
})

