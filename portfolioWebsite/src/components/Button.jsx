import propTypes from 'prop-types';

const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes
}) => {
  if(href){
  return (
    <a 
    href={href}
    target={target}
    className={"btn btn-primary " + classes}
    >
     {label}

    {icon ?
        <span className="material-symbols-rounded"
        aria-hidden="true">
        {icon}
        </span>
        :undefined
        }
        </a>
    
    
  )
  }else{
    return (
        <button className={"btn btn-primary " + classes}>
        {label}

        {icon ?
        <span className="material-symbols-rounded"
        aria-hidden="true">
        {icon}
        </span>
        :undefined
        }
        </button>
    )
  }
}

ButtonPrimary.propTypes = {
  href: propTypes.string.isRequired,
  target: propTypes.string,
  label: propTypes.string.isRequired,
  icon: propTypes.string,
  classes: propTypes.string
}

const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes
}) => {
  if(href){
  return (
    <a 
    href={href}
    target={target}
    className={"btn btn-outline " + classes}
    >
     {label}

    {icon ?
        <span className="material-symbols-rounded"
        aria-hidden="true">
        {icon}
        </span>
        :undefined
        }
        </a>
    
    
  )
  }else{
    return (
        <button className={"btn btn-outline " + classes}>
        {label}

        {icon ?
        <span className="material-symbols-rounded"
        aria-hidden="true">
        {icon}
        </span>
        :undefined
        }
        </button>
    )
  }
}


ButtonOutline.propTypes = {
  href: propTypes.string.isRequired,
  target: propTypes.string,
  label: propTypes.string.isRequired,
  icon: propTypes.string,
  classes: propTypes.string
}

export {
    ButtonPrimary,
    ButtonOutline
}