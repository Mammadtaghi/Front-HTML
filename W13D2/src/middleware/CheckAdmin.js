

export const CheckIfAdmin=(req, res, next)=>{
    if (req.body.password === 'thisisalbi') {
        next()
    }
    else{
        res.send('This is not Albi')
    }
}

