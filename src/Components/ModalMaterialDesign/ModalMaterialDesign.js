import React from 'react';
import './ModalMaterialDesign.css'

const ModalMaterialDesign = ({open, onCloseModal}) => {
  let modalClass = 'ModalMaterialDesign ModalMaterialDesign__bg' +
    (open ? ' ModalMaterialDesign--active' : '');
  let contentClass = 'ModalMaterialDesign__content' +
    (open ? ' ModalMaterialDesign__content--active' : '');
  let modalMaterialDesignBody = (
	<div className={modalClass} role="dialog" aria-hidden="true">
		<div className="ModalMaterialDesign__dialog">
			<div className={contentClass}>
				<h1>Modal 3</h1>
				<p>Church-key American Apparel trust fund, cardigan mlkshk small batch Godard mustache pickled bespoke meh seitan. Wes Anderson farm-to-table vegan, kitsch Carles 8-bit gastropub paleo YOLO jean shorts health goth lo-fi.</p>

				<button className="ModalMaterialDesign__close"
          onClick={(e) => onCloseModal()}>
					<svg className="" viewBox="0 0 24 24"><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/><path d="M0 0h24v24h-24z" fill="none"/></svg>
				</button>
			</div>
		</div>
	</div>
  );

  return modalMaterialDesignBody;
};

export default ModalMaterialDesign;
