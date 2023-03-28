function store_data(path: string, data: string): boolean {
  try {
    Deno.writeTextFileSync(path, data, {
      create: true,
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export default store_data;
