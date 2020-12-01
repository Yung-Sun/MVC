import './app4.css'
import $ from 'jquery'

const $circle = $('#app4 .circle')
$circle.on('mouseenter', () => {
    $circle.addClass('active')
    console.log(111)
}).on('mouseleave', () => {
    $circle.removeClass('active')
})