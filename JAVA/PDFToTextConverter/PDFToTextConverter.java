import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;

public class PDFToTextConverter {

    public static void main(String[] args) {
        String inputFilePath = "input.pdf";
        String outputFilePath = "output.txt";

        try (PDDocument document = PDDocument.load(new File(inputFilePath))) {
            PDFTextStripper stripper = new PDFTextStripper();
            stripper.setSortByPosition(true);
            stripper.setStartPage(0);
            stripper.setEndPage(document.getNumberOfPages());

            FileWriter writer = new FileWriter(outputFilePath);
            stripper.writeText(document, writer);
            writer.close();
        } catch (IOException e) {
            System.err.println("Error converting PDF to text: " + e.getMessage());
        }
    }
}
