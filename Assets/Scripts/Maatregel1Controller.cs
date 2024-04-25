using UnityEngine.UI;
using UnityEngine;
using TMPro;

public class MaatregelController : MonoBehaviour
{
    [SerializeField] private TextMeshProUGUI helpedText;
    [SerializeField] private TextMeshProUGUI volunteerText;
    [SerializeField] private TextMeshProUGUI costText;
    [SerializeField] private Slider sliderScale;
    public float effectPerWeek;
    public float roundsPerYear;
    public float volunteerCostPerThreeMonths;

    void Start()
    {
        sliderScale.onValueChanged.AddListener((v) =>
        {
            float helpedValue = sliderScale.value * 10 * effectPerWeek * roundsPerYear;
            float volunteerValue = helpedValue / 5;
            float costValue = helpedValue * volunteerCostPerThreeMonths;
            helpedText.text = helpedValue.ToString("0,0");
            volunteerText.text = volunteerValue.ToString("0,0");
            costText.text = "€" + costValue.ToString("0,0");
        });
    }
}