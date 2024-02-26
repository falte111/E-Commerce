package Email;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import Model.Person;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class EmailController {
	
	@PostMapping("/booktrial")
	public ResponseEntity<Person> receiveUserDetails(@RequestBody Person person){
		System.out.println(person.getFirstName());
		return null;
		
	}
}
