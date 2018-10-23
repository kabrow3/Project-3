import React from 'react';

export const PanelBody = (props) => (
  <div className="panel-body" {...props}>
    <div class="row">
       {props.children}
		</div>
  </div>
)
