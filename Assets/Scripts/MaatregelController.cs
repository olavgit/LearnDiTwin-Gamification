using System.Collections.Generic;
using System.Globalization;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class MaatregelController : MonoBehaviour
{
    
    private laadData laadDataScript;
    public List<Maatregel> maatregelen;

    public GameObject maatregelPrefab;
    public Transform canvasTransform;


    void Start()
    {
        // Data ophalen van DataLoader Script
        GameObject dataLoader = GameObject.Find("DataLoader");
        laadDataScript = dataLoader.GetComponent<laadData>();
        maatregelen = laadDataScript.maatregelen;

        // Offset aanmaken zodat elke maatregel onder de volgende wordt geplaatst
        float yOffset = 0;

        foreach (Maatregel maatregel in maatregelen)
        {
            GameObject instance = Instantiate(maatregelPrefab, canvasTransform);
            instance.transform.position = new Vector3(instance.transform.position.x, instance.transform.position.y - yOffset, instance.transform.position.z);
            yOffset += 200;

            Slider slider = instance.GetComponentInChildren<Slider>(); 

            TextMeshProUGUI kostenText = instance.transform.Find("LabelNummers/Kosten").GetComponent<TextMeshProUGUI>();
            TextMeshProUGUI geholpenText = instance.transform.Find("LabelNummers/Geholpen").GetComponent<TextMeshProUGUI>();
            TextMeshProUGUI vrijwilligersText = instance.transform.Find("LabelNummers/Vrijwilligers").GetComponent<TextMeshProUGUI>();

            UpdateValues(slider, maatregel, kostenText, geholpenText, vrijwilligersText);


            slider.onValueChanged.AddListener((value) => {
                UpdateValues(slider, maatregel, kostenText, geholpenText, vrijwilligersText);
            });
        }
    }

    void UpdateValues(Slider slider, Maatregel maatregel, TextMeshProUGUI kostenText, TextMeshProUGUI geholpenText, TextMeshProUGUI vrijwilligersText)
        {
            // Excel Berekeningen
            float range = maatregel.maximaal - maatregel.minimaal;
            float newValue = maatregel.minimaal + (slider.value - 1) * range / 9;
            float geholpen = slider.value * maatregel.minimaal * maatregel.effectPerWeek * maatregel.rondesPerJaar;
            float kosten = geholpen * maatregel.kostenPerPersoonPer3Maanden;
            float vrijwilligers = newValue;

            geholpenText.text = geholpen.ToString("N0", new CultureInfo("nl-NL"));
            kostenText.text = "€" + kosten.ToString("N0", new CultureInfo("nl-NL"));
            vrijwilligersText.text = vrijwilligers.ToString("N0", new CultureInfo("nl-NL"));
        }
}