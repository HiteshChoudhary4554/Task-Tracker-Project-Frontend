import PropTypes from "prop-types";
import Button from "../../../common/components/Button";

function TaskCard({
  date,
  dueDate,
  title,
  description,
  onEdit,
  onDone,
  onGoBtn = true,
  onGo,
  onDelete,
  className = "",
}) {

  const taskDate = new Date(dueDate);
  const today = new Date();

  taskDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const isExpired = taskDate >= today;
  const expire = isExpired ?  "#303136" : "#e54a4a"
  return (
    <article
      className={`min-w-full max-w-sm overflow-hidden rounded-3xl border border-gray-300 bg-[${expire}] text-white shadow-lg transition-all duration-300 hover:shadow-xl ${className}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 px-6 pt-5 pb-4">
        <p className="text-sm font-medium tracking-wide text-gray-300 sm:text-base">
          {date}
        </p>

        <div className="flex items-center gap-2">
          <Button color="yellow" text="Edit" onClick={onEdit} />
          { onGoBtn && <Button color="blue" text="OnGo" onClick={onGo} />}
          <Button color="green" text="Done" onClick={onDone} />
          <Button color="red" text="Delete" onClick={onDelete} />
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-red-400" />

      {/* Content */}
      <div className="px-6 py-5">
        <h2 className="truncate text-xl font-bold leading-tight text-white sm:text-2xl">
          {title}
        </h2>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-300 sm:text-base">
          {description}
        </p>
      </div>
    </article>
  );
}

TaskCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onEdit: PropTypes.func,
  onDone: PropTypes.func,
  className: PropTypes.string,
};

export default TaskCard;
