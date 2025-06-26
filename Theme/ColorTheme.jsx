import { useColorScheme } from "react-native"

const lightTheme = {
    primary: "#663CEF",
    secondary: "#10B981",
    tertiary: "#F5F3FF",
    success: "#22C55E",
    warning: "#EAB308",
    error: "#EF4444",
    info: "#3B82F6",
    background: "#FFFFFF",
    surface: "#F9FAFB",
    text: "#1F2937",
    textSecondary: "#4B5563",
    border: "#D1D5DB",
    divider: "#E5E7EB",
    shadow: "#000000",
    success: "#22C55E",
    warning: "#EAB308",
    error: "#EF4444",
    info: "#3B82F6"
}
const DarkTheme = {
    primary: "#663CEF",
    secondary: "#10B981",
    tertiary: "#F5F3FF",
    success: "#22C55E",
    warning: "#EAB308",
    error: "#EF4444",
    info: "#3B82F6",
    background: "#1F2937",
    surface: "#374151",
    text: "#FFFFFF",
    textSecondary: "#D1D5DB",
    border: "#4B5563",
    divider: "#6B7280",
    shadow: "#000000",
    success: "#22C55E",
    warning: "#EAB308",
    error: "#EF4444",
    info: "#3B82F6"
}
export const useTheme = () => {
    const colorScheme = useColorScheme();
    return colorScheme === 'dark' ? DarkTheme : lightTheme;
}