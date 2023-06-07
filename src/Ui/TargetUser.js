import React from 'react'

const TargetUser = ({image, textName, direction, imageGym}) => {
  return (
    <div class="cardGym">
        <div ><img class="card__image" src={imageGym}/></div>
        <div class="card__content">
            <span class="card__title"><a href='/infoUser'>{textName}</a></span>
            <p class="card__describe">{direction}</p>
        </div>
    </div>
  )
}

export default TargetUser;