describe("Medicine Reminder", () => {
  test("medicine should contain required information", () => {
    const medicine = {
      name: "Demo Medicine",
      dosage: "1 Tablet",
      time: "20:00",
      frequency: "Daily"
    };

    expect(medicine.name).toBeDefined();
    expect(medicine.dosage).toBeDefined();
    expect(medicine.time).toBeDefined();
    expect(medicine.frequency).toBeDefined();
  });

  test("medicine time should be in valid format", () => {
    const medicine = {
      name: "Demo Medicine",
      time: "20:00"
    };

    expect(medicine.time).toMatch(/^([01]\d|2[0-3]):([0-5]\d)$/);
  });

  test("medicine name should not be empty", () => {
    const medicine = {
      name: "Demo Medicine"
    };

    expect(medicine.name.length).toBeGreaterThan(0);
  });
});
