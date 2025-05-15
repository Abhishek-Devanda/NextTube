import { formatDate, formatDistanceToNow } from "date-fns";

export const formatDuration = (duration: string) => {
    if (duration === 'P0D') return 'LIVE';
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

    if (!match) {
        console.error("Invalid duration format:", duration);
        return "0:00"; // Return a default value or handle the error appropriately
    }

    const hours = match[1] ? parseInt(match[1]) : 0;
    const minutes = match[2] ? parseInt(match[2]) : 0;
    const seconds = match[3] ? parseInt(match[3]) : 0;

    const formattedHours = hours > 0 ? String(hours).padStart(2, "0") + ":" : "";
    const formattedMinutes = String(minutes).padStart(2, "0") + ":";
    const formattedSeconds = String(seconds).padStart(2, "0");

    return formattedHours + formattedMinutes + formattedSeconds;
};

// Helper function to format views (e.g., 1.2M for 1,200,000)
export const compactNumber = (number: number) => {
    if (number < 1000000) {
        return Intl.NumberFormat("en", {
            notation: "compact",
        }).format(number)
    }
    return Intl.NumberFormat("en", {
        notation: "compact",
        maximumFractionDigits: 1,
        minimumFractionDigits: 1
    }).format(number);
}

export const expandedNumber = (number: number) => {
    return Intl.NumberFormat("en", {
        notation: "standard"
    }).format(number);
}

// Helper function to format date (e.g., 1 day ago)
export const compactDate = (date: string) => {
    return formatDistanceToNow(date, { addSuffix: true, });
}
export const expandedDate = (date: string) => {
    return formatDate(date, "MMM d, yyyy");
}