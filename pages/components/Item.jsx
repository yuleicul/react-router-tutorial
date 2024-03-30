/**
 * @typedef ItemProps
 * @prop {string} type
 * @prop {string} date
 * @prop {string} title
 * @prop {string} description
 * @prop {string} href
 */

/**
 * @param {ItemProps} param0
 */
function Item({ type, date, title, description, href }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-center pb-16 md:pb-20 md:gap-40 text-brand-1">
      <div className="flex items-center gap-4 md:block md:text-brand-2 flex-1 md:text-right">
        <h3 className="text-sm md:text-base font-700 font-montserrat uppercase opacity-80">
          {type}
        </h3>
        <p className="text-sm">{date}</p>
      </div>
      <a className="flex-1" href={href}>
        <h2 className="text-2xl pb-1 font-montserrat font-800">{title}</h2>
        <p>{description}</p>
      </a>
    </div>
  );
}

export default Item;
