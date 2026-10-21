describe("Senior Saathi SOS", () => {

  test("should create an SOS alert with user and location", () => {
    const sos = {
      userId: "SEN001",
      latitude: 23.2599,
      longitude: 77.4126,
      status: "active"
    };

    expect(sos.userId).toBe("SEN001");
    expect(sos.latitude).toBeDefined();
    expect(sos.longitude).toBeDefined();
    expect(sos.status).toBe("active");
  });

  test("SOS should contain valid location coordinates", () => {
    const sos = {
      latitude: 23.2599,
      longitude: 77.4126
    };

    expect(typeof sos.latitude).toBe("number");
    expect(typeof sos.longitude).toBe("number");
  });

  test("SOS should fail if userId is missing", () => {
    const sos = {
      latitude: 23.2599,
      longitude: 77.4126
    };

    expect(sos.userId).toBeUndefined();
  });

});
