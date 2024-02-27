export const errorHandler = (error) => {
    if (error.response.data.status === "error") {
        return {
            status: error.response.data.status,
            message: error.response.data.message,
            error: error.response.data.error
        };
    }
    return {
        status: "error",
        message: "Error en el Context",
        error: error
    };
}