const express = require('express')

module.exports = {
    addProp: (req, res, next) => {
        console.log(req.user)
        req.user = {firstName: 'sam', lastName: 'mii'}
        console.log(req.user)
        next()
    }
}