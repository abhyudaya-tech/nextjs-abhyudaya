// 27 Dec, 2023
export function formatDateToCustom(dateString: string) {
    if (!dateString) return '';

    const date = new Date(dateString);

    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();

    return `${day} ${month}, ${year}`;
}