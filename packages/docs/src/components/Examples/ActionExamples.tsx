import React, { useState } from "react";
import ReactLiveScope from "@site/src/theme/ReactLiveScope";
import "../../../../core/dist/index.css";

export default function ActionExamples() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  return (
    <div className="example-container" style={{display: "flex", flexDirection: 'row', gap: "24px"}}>
      <div>
        <button
          onClick={() => setOpen1(true)}
          className="button button--primary"
        >
          Buttons inside Body
        </button>

        <ReactLiveScope.Dialog
          open={open1}
          onClose={() => setOpen1(false)}
          title="Terms and Conditions"
          titleIcon="😎"
        >
          <ReactLiveScope.DialogBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
              rhoncus lorem. Aenean convallis dui non ullamcorper finibus. Duis
              volutpat consequat diam, at blandit tellus vehicula a. Aliquam
              iaculis erat eget mollis accumsan. Aenean pharetra leo eu velit
              dignissim, in mattis dolor facilisis. Nullam non tortor elit. Nunc
              neque nulla, elementum id dui eu, luctus aliquet est. Integer ut
              dui finibus, viverra mauris et, fringilla dui. Donec in efficitur
              nisi. Ut laoreet tincidunt nisi, vel scelerisque justo feugiat at.
              Phasellus sodales nulla vestibulum eros ullamcorper pharetra. Duis
              sit amet nisi eu nisi interdum viverra eu vitae tellus.
              Pellentesque viverra risus non nisl commodo, vitae euismod eros
              malesuada. Suspendisse pellentesque dapibus eros et aliquam.
              Mauris cursus sed nulla in maximus. Nunc fringilla augue a massa
              tempus ornare. Cras convallis tortor vitae metus auctor
              consectetur quis vel elit. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. Morbi a leo eget nibh pharetra viverra.
              Proin lobortis blandit scelerisque. Morbi et sem id tortor laoreet
              mattis. Cras eros mauris, tincidunt at enim eu, suscipit blandit
              urna. Duis viverra ex ac odio posuere bibendum. Phasellus
              elementum erat ac erat posuere bibendum. Vivamus egestas justo ut
              venenatis interdum. Ut tellus nisi, venenatis et arcu convallis,
              ultrices imperdiet nulla. Cras sit amet ultricies ex. Morbi at
              consequat ex. Fusce et placerat massa. Suspendisse efficitur magna
              sed enim tincidunt pellentesque. Nulla facilisi. Proin elit lorem,
              aliquam elementum semper non, varius eget velit. Aliquam eleifend
              vitae risus ac varius. Nunc sed leo purus. Nunc vitae condimentum
              ipsum. Aenean sollicitudin nec elit et ullamcorper. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nunc eget lectus
              felis. In sed elit lacinia lacus vehicula placerat. Aliquam
              faucibus scelerisque lacus, non ultrices justo dictum et. Donec ac
              aliquet turpis, in cursus nibh. Nunc eget congue neque. Mauris
              quis accumsan est, commodo malesuada est. Donec blandit lectus vel
              porttitor semper. Morbi dignissim mi id luctus pellentesque.
              Nullam sit amet interdum velit. Aliquam placerat gravida quam sed
              vestibulum. Vivamus in nunc sed ligula aliquam malesuada.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Vivamus euismod sollicitudin ante, ut
              volutpat mi bibendum interdum. Mauris ex quam, porta eget mi
              vitae, pretium volutpat purus. Vivamus justo magna, cursus a lacus
              a, ornare rutrum nunc. Donec egestas imperdiet justo id
              sollicitudin. Cras semper nisi quam, eget pharetra mi dapibus
              quis. Morbi placerat laoreet pulvinar. Pellentesque pharetra
              tempus diam id lacinia. Vivamus tempus tristique mauris, non
              egestas diam lacinia sit amet. Suspendisse ac gravida urna. Mauris
              eu porta enim. Duis nec fringilla nisi. Praesent blandit tellus
              facilisis, gravida felis ut, posuere neque. Pellentesque tincidunt
              gravida justo, sit amet bibendum mi tincidunt at.
                      </p>
                      <div style={{display: "flex", gap: "8px", justifyContent: "flex-end"}}>
                          
            <ReactLiveScope.DialogCloseButton onClick={() => setOpen1(false)}>
              Cancel
            </ReactLiveScope.DialogCloseButton>
            <ReactLiveScope.DialogSuccessButton onClick={() => setOpen1(false)}>
              Confirm
            </ReactLiveScope.DialogSuccessButton>
                      </div>
          </ReactLiveScope.DialogBody>
        </ReactLiveScope.Dialog>
          </div>
      <div>
        <button
          onClick={() => setOpen2(true)}
          className="button button--primary"
        >
          In DialogActions
        </button>

        <ReactLiveScope.Dialog
          open={open2}
          onClose={() => setOpen2(false)}
          title="Terms and Conditions"
          titleIcon="😎"
        >
          <ReactLiveScope.DialogBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
              rhoncus lorem. Aenean convallis dui non ullamcorper finibus. Duis
              volutpat consequat diam, at blandit tellus vehicula a. Aliquam
              iaculis erat eget mollis accumsan. Aenean pharetra leo eu velit
              dignissim, in mattis dolor facilisis. Nullam non tortor elit. Nunc
              neque nulla, elementum id dui eu, luctus aliquet est. Integer ut
              dui finibus, viverra mauris et, fringilla dui. Donec in efficitur
              nisi. Ut laoreet tincidunt nisi, vel scelerisque justo feugiat at.
              Phasellus sodales nulla vestibulum eros ullamcorper pharetra. Duis
              sit amet nisi eu nisi interdum viverra eu vitae tellus.
              Pellentesque viverra risus non nisl commodo, vitae euismod eros
              malesuada. Suspendisse pellentesque dapibus eros et aliquam.
              Mauris cursus sed nulla in maximus. Nunc fringilla augue a massa
              tempus ornare. Cras convallis tortor vitae metus auctor
              consectetur quis vel elit. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. Morbi a leo eget nibh pharetra viverra.
              Proin lobortis blandit scelerisque. Morbi et sem id tortor laoreet
              mattis. Cras eros mauris, tincidunt at enim eu, suscipit blandit
              urna. Duis viverra ex ac odio posuere bibendum. Phasellus
              elementum erat ac erat posuere bibendum. Vivamus egestas justo ut
              venenatis interdum. Ut tellus nisi, venenatis et arcu convallis,
              ultrices imperdiet nulla. Cras sit amet ultricies ex. Morbi at
              consequat ex. Fusce et placerat massa. Suspendisse efficitur magna
              sed enim tincidunt pellentesque. Nulla facilisi. Proin elit lorem,
              aliquam elementum semper non, varius eget velit. Aliquam eleifend
              vitae risus ac varius. Nunc sed leo purus. Nunc vitae condimentum
              ipsum. Aenean sollicitudin nec elit et ullamcorper. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nunc eget lectus
              felis. In sed elit lacinia lacus vehicula placerat. Aliquam
              faucibus scelerisque lacus, non ultrices justo dictum et. Donec ac
              aliquet turpis, in cursus nibh. Nunc eget congue neque. Mauris
              quis accumsan est, commodo malesuada est. Donec blandit lectus vel
              porttitor semper. Morbi dignissim mi id luctus pellentesque.
              Nullam sit amet interdum velit. Aliquam placerat gravida quam sed
              vestibulum. Vivamus in nunc sed ligula aliquam malesuada.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Vivamus euismod sollicitudin ante, ut
              volutpat mi bibendum interdum. Mauris ex quam, porta eget mi
              vitae, pretium volutpat purus. Vivamus justo magna, cursus a lacus
              a, ornare rutrum nunc. Donec egestas imperdiet justo id
              sollicitudin. Cras semper nisi quam, eget pharetra mi dapibus
              quis. Morbi placerat laoreet pulvinar. Pellentesque pharetra
              tempus diam id lacinia. Vivamus tempus tristique mauris, non
              egestas diam lacinia sit amet. Suspendisse ac gravida urna. Mauris
              eu porta enim. Duis nec fringilla nisi. Praesent blandit tellus
              facilisis, gravida felis ut, posuere neque. Pellentesque tincidunt
              gravida justo, sit amet bibendum mi tincidunt at.
            </p>
          </ReactLiveScope.DialogBody>
          <ReactLiveScope.DialogActions>
            <ReactLiveScope.DialogCloseButton onClick={() => setOpen2(false)}>
              Cancel
            </ReactLiveScope.DialogCloseButton>
            <ReactLiveScope.DialogSuccessButton onClick={() => setOpen2(false)}>
              Confirm
            </ReactLiveScope.DialogSuccessButton>
          </ReactLiveScope.DialogActions>
        </ReactLiveScope.Dialog>
      </div>
    </div>
  );
}
