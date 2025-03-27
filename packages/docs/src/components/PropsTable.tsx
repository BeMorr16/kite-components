import React from "react";
import "../css/custom.css";

export default function PropsTable({ propType = "dialog" }) {
  const dialogProps = [
    {
      name: "open",
      required: true,
      type: "boolean",
      default: undefined,
      description: "Determines whether the Dialog is open",
    },
    {
      name: "onClose",
      required: true,
      type: "func",
      default: undefined,
      description: "Callback function when dialog closes",
    },
    {
      name: "children",
      required: true,
      type: "ReactNode",
      default: undefined,
      description: "Elements rendered inside the dialog",
    },
    {
      name: "onComplete",
      required: false,
      type: "func",
      default: undefined,
      description:
        "Callback envoked by DialogButton. onComplete(result: 'success' | 'failure') => {} ",
    },
    {
      name: "title",
      required: false,
      type: "string",
      default: undefined,
      description:
        "The title for the Dialog component. Shoudl not be used with <DialogTitle></DialogTitle>",
    },
    {
      name: "titleVariant",
      required: false,
      type: "h1-6",
      default: "h2",
      description: "Type of header component for the title.",
    },
    {
      name: "titleIcon",
      required: false,
      type: "ReactNode",
      default: undefined,
      description: "Icon to go next to the title in the header of the Dialog.",
    },
    {
      name: "size",
      required: false,
      type: "string",
      default: "Default",
      description:
        "If responsive sizing for bigger size screens is not big enough, use 'full'",
    },
    {
      name: "closeOnOverlayClick",
      required: false,
      type: "boolean",
      default: "true",
      description: "Close the dialog when the outside area is clicked",
    },
    {
      name: "closeOnEsc",
      required: false,
      type: "boolean",
      default: "true",
      description: "Close the dialog when the Esc is pressed.",
    },
    {
      name: "id",
      required: false,
      type: "string",
      default: undefined,
      description: "id used for accessibility. Auto generated if no input.",
    },
    {
      name: "className",
      required: false,
      type: "string",
      default: undefined,
      description: "className to apply css",
    },
    {
      name: "style",
      required: false,
      type: "CSS Properties",
      default: undefined,
      description: "styles prop",
    },
    {
      name: "role",
      required: false,
      type: "dialog | alertdialog",
      default: "dialog",
      description: "For accessibility",
    },
    {
      name: "ariaDescribedby",
      required: false,
      type: "string",
      default: undefined,
      description: "For accessibility",
    },
    {
      name: "ariaLabelledby",
      required: false,
      type: "string",
      default: undefined,
      description: "For accessibility",
    },
  ];
  const titleProps = [
    {
      name: "children",
      required: true,
      type: "ReactNode",
      default: undefined,
      description: "The content of the dialog title",
    },
    {
      name: "icon",
      required: false,
      type: "ReactNode",
      default: undefined,
      description: "Icon element next to title",
    },
    {
      name: "className",
      required: false,
      type: "string",
      default: "''",
      description: "Additional CSS class",
    },
  ];
  const bodyProps = [
    {
      name: "children",
      required: true,
      type: "ReactNode",
      default: undefined,
      description: "The content of the dialog title",
    },
    {
      name: "className",
      required: false,
      type: "string",
      default: "''",
      description: "Additional CSS class",
    },
  ];
  const actionProps = [
    {
      name: "children",
      required: true,
      type: "ReactNode",
      default: undefined,
      description: "The content of the dialog title",
    },
    {
      name: "className",
      required: false,
      type: "string",
      default: "''",
      description: "Additional CSS class",
    },
    {
      name: "justify",
      required: false,
      type: "'start' | 'end' | 'center' | 'space-between'",
      default: "end",
      description: "Controls the alignment of the actions",
    },
  ];
  const buttonProps = [
    {
      name: "children",
      required: true,
      type: "ReactNode",
      default: undefined,
      description: "The content of the dialog title",
    },
    {
      name: "className",
      required: false,
      type: "string",
      default: "''",
      description: "Additional CSS class",
    },
    {
      name: "onClick",
      required: false,
      type: "func",
      default: undefined,
      description: "Additional click handler",
    },
    {
      name: "buttonType",
      required: false,
      type: "'success' | 'failure' | 'close'",
      default: "close",
      description: "Determines button styling and behavior",
    },
    {
      name: "aria-label",
      required: false,
      type: "string",
      default: "Auto generated",
      description: "Accessibility",
    },
  ];

  const getProps = () => {
    switch (propType) {
      case "dialog":
        return dialogProps;
      case "title":
        return titleProps;
      case "body":
        return bodyProps;
      case "actions":
        return actionProps;
      case "button":
        return buttonProps;
      default:
        return dialogProps;
    }
  };

  const props = getProps();

  return (
    <div className="table-container">
      <table className="props-table">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name}>
              <td className="prop-name">
                {prop.name}
                {prop.required && <span className="required">*</span>}
              </td>
              <td className="prop-type">
                <code>{prop.type}</code>
              </td>
              <td className="prop-default">
                {prop.default === undefined ? (
                  <span className="none">—</span>
                ) : (
                  <code>{prop.default}</code>
                )}
              </td>
              <td className="prop-description">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="required-note">* Required prop</div>
    </div>
  );
}
