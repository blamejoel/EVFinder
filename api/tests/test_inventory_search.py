from api.inventory_search import validate_request
import pytest
import requests

@pytest.mark.parametrize(
  "validation_type, test_input, expected, assertion_message",
    [
      ('zip', '12345', True, "Valid zip"),
      ('zip', '1234', False, "Zip not complete, too short"),
      ('zip', 'notanumber', False, "Zip should be a number"),
      ('zip', '🤔', False, "Zip codes can't be emoji...yet"),
      ('zip', '00500', False, "Zip code not valid (too low)"),
      ('zip', '99951', False, "Zip code not valid (too high)"),
      ('zip', '-12345', False, "Not a valid zip code"),
      ('zip', '00501', True, "Valid first zip code"),
      ('zip', '99950', True, "Valid last zip code"),
      ('year', '2022', True, "Valid year"),
      ('year', '2021', False, "Invalid year"),
      ('year', '201', False, "Invalid year"),
      ('year', '-2022', False, "Invalid year"),
      ('year', 'notayear', False, "Invalid year"),
      ('year', '🤔', False, "Invalid year"),
      ('model', 'Ioniq%205', True, "Valid Model"),
      ('model', 'Ioniq%20Phev', True, "Valid Model"),
      ('model', 'Kona%20Ev', True, "Valid Model"),
      ('model', 'Santa%20Fe%20Phev', True, "Valid Model"),
      ('model', 'Sonata%20Hev', True, "Valid Model"),
      ('model', 'Tucson%20Phev', True, "Valid Model"),
      ('model', 'Tucson', False, "Not a Valid Model"),
      ('model', 'Ioniq 5', False, "Not a Valid Model"),
      ('model', '🤔', False, "Not a Valid Model"),
      ('radius', '0', False, "Radius too short"),
      ('radius', '-1', False, "Not a valid radius"),
      ('radius', '🤔', False, "Not a valid radius"),
      ('radius', '1000', False, "Radius too large"),
      ('radius', '1', True, "Valid radius"),
      ('radius', '999', True, "Valid radius"),
      ('radius', '25', True, "Valid radius"),
    ]
  )
def test_validate_request(validation_type, test_input, expected, assertion_message):

  assert validate_request(validation_type, test_input) == expected, assertion_message