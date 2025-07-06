package com.weather;

import org.junit.Test;
import static org.junit.Assert.*;

public class AppTest {
    @Test
    public void testWeather() {
        assertEquals("Weather: Sunny, 30°C", App.getWeather());
    }
}

