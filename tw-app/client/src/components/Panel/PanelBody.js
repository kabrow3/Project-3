import React from 'react';

export const PanelBody = (props) => (
  <div className="panel-body" {...props}>
    <div className="row">
       {props.children}
		</div>
  </div>
)
