export default function TaskToolbar({
  search,
  statusFilter,
  priorityFilter,
  onSearchChange,
  onStatusFilterChange,
  onPriorityFilterChange,
  onResetFilters,
}) {
  return (
    <div className="toolbar">
      <input
        type="text"
        placeholder="Поиск по названию или проекту"
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        className="toolbarInput"
      />

      <select
        value={statusFilter}
        onChange={(event) => onStatusFilterChange(event.target.value)}
        className="toolbarSelect"
      >
        <option>Все</option>
        <option>Нужно сделать</option>
        <option>В работе</option>
        <option>Готово</option>
      </select>

      <select
        value={priorityFilter}
        onChange={(event) => onPriorityFilterChange(event.target.value)}
        className="toolbarSelect"
      >
        <option>Все</option>
        <option>Низкий</option>
        <option>Средний</option>
        <option>Высокий</option>
      </select>

      <button
        type="button"
        className="ghostButton"
        onClick={onResetFilters}
      >
        Сбросить
      </button>
    </div>
  );
}